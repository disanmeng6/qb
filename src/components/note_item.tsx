import React from "react";
import "./note_item.less";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface poprs {
  item: {
    title: string,
    parments: string,
    create_time: string | number
  }
}
const noteItem = ({ item }: poprs) => {
  return (
    <div className="note_item_style">
      <h6 className="note_item_title">{item.title}</h6>
      <div className="note_item_box">
        <p>{item.parments}</p>
      </div>
      <div>
        <span>{item.create_time}</span>
      </div>
    </div>
  );
};

export default noteItem;