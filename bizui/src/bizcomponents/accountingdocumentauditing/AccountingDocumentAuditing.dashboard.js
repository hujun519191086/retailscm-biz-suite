

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './AccountingDocumentAuditing.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'


const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers
}= DashboardTool



const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(accountingDocumentAuditing)=>{return [
	 ]}

const internalImageListOf = (accountingDocumentAuditing) =>defaultImageListOf(accountingDocumentAuditing,imageList)

const optionList =(accountingDocumentAuditing)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (accountingDocumentAuditing) =>defaultSettingListOf(accountingDocumentAuditing, optionList)
const internalLargeTextOf = (accountingDocumentAuditing) =>{

	return null
	

}







const internalRenderExtraHeader = defaultRenderExtraHeader




const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf

const internalSummaryOf = (accountingDocumentAuditing,targetComponent) =>{
	
	
	const {AccountingDocumentAuditingService} = GlobalComponents
	
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{accountingDocumentAuditing.id}</Description> 
<Description term="谁">{accountingDocumentAuditing.who}</Description> 
<Description term="评论">{accountingDocumentAuditing.comments}</Description> 
<Description term="制造日期">{ moment(accountingDocumentAuditing.makeDate).format('YYYY-MM-DD')}</Description> 
	
        {buildTransferModal(accountingDocumentAuditing,targetComponent)}
      </DescriptionList>
	)

}


class AccountingDocumentAuditingDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"城市",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'accountingDocumentAuditing'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, accountingDocumentListMetaInfo, accountingDocumentCount } = this.props.accountingDocumentAuditing
    if(!this.props.accountingDocumentAuditing.class){
      return null
    }
    const cardsData = {cardsName:"会计凭证的审核",cardsFor: "accountingDocumentAuditing",cardsSource: this.props.accountingDocumentAuditing,
  		subItems: [
{name: 'accountingDocumentList', displayName:'会计凭证',type:'accountingDocument',count:accountingDocumentCount,addFunction: true, role: 'accountingDocument', metaInfo: accountingDocumentListMetaInfo},
    
      	],
  	};
    //下面各个渲染方法都可以定制，只要在每个模型的里面的_features="custom"就可以得到定制的例子
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        {subListsOf(cardsData)} 
        {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  accountingDocumentAuditing: state._accountingDocumentAuditing,
}))(Form.create()(AccountingDocumentAuditingDashboard))

