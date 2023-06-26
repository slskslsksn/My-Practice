export const Container = ({ children }) => {
  console.log(children);
  return <div style={{ margin: '20px', padding: '20px', border: '1px solid gray' }}>{children}</div>;
};
