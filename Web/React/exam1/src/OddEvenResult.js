export const OddEvenResult = ({ count }) => {
  return <>{count == 0 ? '00' : count & 1 ? '홀수' : '짝수'}</>;
};
