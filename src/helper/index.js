import _ from 'lodash';
import React, { Component } from 'react';

export const capitalize = (strings)=>{ return _.startCase(_.toLower(strings)) }

export function _renderLoader(i,Compon){
    let result=[]; for (var j = 0; j < i; j++) { result.push(<Compon isLoading key={j} />)}; return result;
}