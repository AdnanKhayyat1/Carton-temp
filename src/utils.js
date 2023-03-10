const uid = () => {
    return (Date.now() + Math.random()).toFixed();
  };
const setCaretToEnd = (element) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    element.focus();
  };
const getCaretCoordinates = () => {
    let x, y;
    const selection = window.getSelection();
    if (selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange();
      range.collapse(false);
      const rect = range.getClientRects()[0];
      if (rect) {
        x = rect.left;
        y = rect.top;
      }
    }
    return { x, y };
};

  export default {uid, setCaretToEnd, getCaretCoordinates};