import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { initialNotes } from '../../data/initialNotes';
import AddItem from './AddItem';
import Item, { TItem } from './Item';
import './Main.css';

export default function Main() {
  const [itemList, setItemList] = useState<TItem[]>([]);

  const handleAddItem = (item: TItem) => {
    setItemList((itemList) => {
      // Persist new item on Local Storage
      const itemListInStorage = JSON.parse(
        localStorage.getItem('itemList') ?? '[]'
      );
      localStorage.setItem(
        'itemList',
        JSON.stringify(itemListInStorage.concat(item))
      );

      const newItemList = itemList.concat(item);
      return newItemList;
    });
  };

  const toggleCheckItem = (index: number) => () => {
    setItemList((itemList) => {
      const newItemList = itemList.map((item: TItem, listIndex: number) =>
        listIndex === index ? { ...item, checked: !item.checked } : item
      );

      // Update item list in Local Storage
      localStorage.setItem('itemList', JSON.stringify(newItemList));

      return newItemList;
    });
  };

  const handleRemoveItem = (index: number) => () => {
    setItemList((itemList) => {
      const newListItem = itemList.filter(
        (item, listIndex) => listIndex !== index
      );

      // Update item list in Local Storage
      localStorage.setItem('itemList', JSON.stringify(newListItem));

      return newListItem;
    });
  };

  // Retrieve the items list from the Local Storage if available
  useEffect(() => {
    const itemListInStorage = JSON.parse(
      localStorage.getItem('itemList') ?? JSON.stringify(initialNotes)
    );
    setItemList(itemListInStorage);

    return () => {
      // Clear Local Storage when exiting
      localStorage.removeItem('itemList');
    };
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
      </TabList>
      <AddItem handleAddItem={handleAddItem} />
      <TabPanel>
        {/* Using the index as the key avoids unmounting the list items when re-rendering.
        List order should be preserved. */}
        {itemList.map((item, index) => (
          <Item
            message={item.message}
            checked={item.checked}
            key={index}
            toggleCheckItem={toggleCheckItem(index)}
          />
        ))}
      </TabPanel>
      <TabPanel>
        {itemList.map((item, index) =>
          !item.checked ? (
            <Item
              message={item.message}
              checked={item.checked}
              key={index}
              toggleCheckItem={toggleCheckItem(index)}
            />
          ) : null
        )}
      </TabPanel>
      <TabPanel>
        {itemList.map((item, index) =>
          item.checked ? (
            <Item
              message={item.message}
              checked={item.checked}
              key={index}
              toggleCheckItem={toggleCheckItem(index)}
              removeItem={handleRemoveItem(index)}
            />
          ) : null
        )}
      </TabPanel>
    </Tabs>
  );
}
