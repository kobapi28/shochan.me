/**
 * レスポンスにタグがついて返ってくるので、前3文字、後ろ4文字を削除して返す
 * @param string comment
 * @return string
 */
export const eraseTags = (comment: string): string => {
  return comment.slice(3).slice(0, -4);
};
