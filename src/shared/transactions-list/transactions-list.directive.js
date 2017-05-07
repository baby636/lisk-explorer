'use strict';
import AppTools from '../../app/app-tools.module';
import template from './transactions-list.html';

const transactionsList = AppTools.directive('transactionsList', () => ({
    template,
    scope: {
      txs: '='
    },
    link: ($scope) => console.log('transactionsList', $scope)
}));

export default transactionsList;