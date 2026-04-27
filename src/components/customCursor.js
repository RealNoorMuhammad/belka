const cursorImageUrl = new URL('../assets/woodcursor.png', import.meta.url).href;

export function setupCustomCursor() {
  const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)');
  let teardown = null;

  const enableCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = `<img class="custom-cursor__img" src="${cursorImageUrl}" alt="" />`;

    document.body.append(cursor);
    document.body.classList.add('custom-cursor-enabled');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;
    let frameId = 0;
    let introTimer = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frameId = window.requestAnimationFrame(render);
    };

    const showCursor = () => {
      if (isVisible) return;
      isVisible = true;
      cursor.classList.add('is-visible');
    };

    const hideCursor = () => {
      isVisible = false;
      cursor.classList.remove('is-visible');
      cursor.classList.remove('is-pressed');
    };

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const interactiveElement = event.target.closest('a, button, [role="button"], input, textarea, select, label');
      cursor.classList.toggle('is-hovering', Boolean(interactiveElement));
      showCursor();
    };

    const handleMouseDown = () => {
      cursor.classList.add('is-pressed');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('is-pressed');
    };

    const handleResize = () => {
      targetX = Math.min(targetX, window.innerWidth);
      targetY = Math.min(targetY, window.innerHeight);
    };

    introTimer = window.setTimeout(() => {
      cursor.classList.add('is-intro');
      showCursor();
    }, 180);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);
    window.addEventListener('blur', hideCursor);
    window.addEventListener('focus', showCursor);
    window.addEventListener('resize', handleResize);

    render();

    return () => {
      window.clearTimeout(introTimer);
      window.cancelAnimationFrame(frameId);
      document.body.classList.remove('custom-cursor-enabled');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      window.removeEventListener('blur', hideCursor);
      window.removeEventListener('focus', showCursor);
      window.removeEventListener('resize', handleResize);
      cursor.remove();
    };
  };

  const syncCursorMode = () => {
    if (mediaQuery.matches) {
      if (!teardown) {
        teardown = enableCursor();
      }
      return;
    }

    teardown?.();
    teardown = null;
  };

  syncCursorMode();
  mediaQuery.addEventListener('change', syncCursorMode);
}
