import { Job } from '../..';
import './Items.css';

export function Items({ currentItems }: { currentItems: Job[] }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='item' key={item.id}>
            <p className='item__company'>{item.company}</p>
            <h2 className='item__title'>{item.title}</h2>
            <div className='item__details'>
              <span className='job-type'>{item.type}</span>
              <span className='job-location'>&#xe80b; {item.location}</span>
              <span className='job-time'>&#xe8b5; {item.created_at}</span>
            </div>
          </div>
        ))}
    </>
  );
}
