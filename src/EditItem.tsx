import React, { useEffect, useState } from "react";
import Axios from "axios";
import { bindActionCreators } from "redux";
import * as TodoActions from "./actions/TodoActions";
import * as DataActions from "./actions/dataActions";
import { connect } from "react-redux";

const EditItem = (props: any) => {
  const [itemId, setId] = useState(null);
  const [text, changeText] = useState("");
  const [id, changeID] = useState(null);

  const [key, keyDown] = useState(false);

  const handleSubmit = () => {
    if (text.length !== 0) {
      console.log(props);
      props.action.editTODO(id, text);
      //   Axios.patch(`http://localhost:3000/data/${id}`, {
      //     name: text
      //   }).then(() => {
      //     window.close();
      //   });
    }
  };

  useEffect(handleSubmit, [key]);

  useEffect(() => {
    setId(props.match.params.item_id);
    if (itemId) {
      Axios.get(`http://localhost:3000/data/${itemId}`).then(res => {
        changeText(res.data.name);
        changeID(res.data.id);
      });
    }
  }, [itemId]);

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder={`Edit item: "${text}"`}
        onChange={e => changeText(e.target.value)}
        onKeyDown={e => (e.keyCode === 13 ? keyDown(!key) : null)}
      />
      {itemId}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    data: state.dataReducers
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    action: bindActionCreators(TodoActions, dispatch),
    action2: bindActionCreators(DataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
