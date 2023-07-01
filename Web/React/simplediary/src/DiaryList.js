import DiaryItem from './DiaryItem';
import { useContext } from 'react';
import { DiaryStateContext } from './App';

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((item) => (
          <div key={item.id}>
            <DiaryItem key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
