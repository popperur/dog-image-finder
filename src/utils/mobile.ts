function isMobileDevice() {
  return (
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
  );
}

export { isMobileDevice };
