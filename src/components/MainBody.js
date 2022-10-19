import React from 'react';
import Missedit from './Components';
import Todaylist from './Todaylist';
import dataMissed from "../dataMissed"
import dataToday from '../dataToday';

export const MainBody = () => {

  const trends = dataMissed.map(item => {
    return (
      <Missedit 
        key = {item.id}
        heading = {item.heading}
        img = {item.img}
        name = {item.name}
        num = {item.num}
        paragraph = {item.paragraph}
        upVote = {item.upVote}
      />
    )
  })

  const todayListData = dataToday.map(item => {
    return (
      <Todaylist 
      key = {item.id}
      heading = {item.heading}
      popular = {item.popular}
      newest = {item.newest}
      img = {item.img}
      name = {item.name}
      num = {item.num}
      paragraph = {item.paragraph}
      upVote = {item.upVote}
      />
    )
  })

  return (
    <div>
      {trends}
      {todayListData} 
      {trends}
    </div>
  );
};

export default MainBody;
