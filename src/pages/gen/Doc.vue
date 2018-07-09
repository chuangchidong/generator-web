
<template>
    <div>
        <Row>
            <Col span="10">
                <Card>
                    <p slot="title">
                        <Icon type="load-b"></Icon>
                        项目列表
                    </p>
                    <div style="margin: 0 0 10px 5px;overflow: hidden">
                        <Input v-model="queryTableName" placeholder="输入表名称..." style="width: 300px"></Input> 
                        <Button type = "ghost" icon="ios-search"  @click="queryList">查询</Button> 
                        <Button type="primary" icon="arrow-down-a"@click="geneMysqlCode">生成代码</Button>
                    </div>
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table0" 
                            :edit-incell="true" 
                            v-model="tableProjectData" 
                            v-on:selectionClick ="selectionProjectClick"
                            :columns-list="tableProjectColumns"  stripe border></can-edit-table>
                    </div>
                </Card>
            </Col>
            <Col span="12" class="padding-left-10">
                <Card>
                    <p slot="title">
                        <Icon type="cube"></Icon>
                        模块列表
                    </p>
                    <div class="edittable-con-1">
                        <can-edit-table refs="table1" 
                            :edit-incell="true" 
                            v-model="tableModuleData" 
                            v-on:selectionClick ='selectionModuleClick'
                            :columns-list="tableModuleColumns"></can-edit-table>
                    </div>
                </Card>
            </Col>
        </Row>

        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="ios-keypad"></Icon>
                         接口文档
                    </p>
                    <Row :gutter="10">
                        <Col span="2">
                            <Row type="flex" justify="center" align="middle" class="edittable-table-get-currentdata-con">
                                <Button type="primary" @click="getCurrentData">下载当前</Button>
                            </Row>
                        </Col>
                        <Col span="22">
                            <div class="edittable-table-height-con">
                                <can-edit-table 
                                    refs="table2" 
                                    v-model="tableApiData" 
                                    @on-cell-change="handleCellChange" 
                                    @on-change="handleChange"  
                                    v-on:selectionClick ='selectionApiClick'
                                    :editIncell="true" 
                                    :columns-list="tableApiColumns"
                                ></can-edit-table>

                                <!-- <can-edit-table refs="table1" :edit-incell="true" v-model="tableModuleData" :columns-list="tableModuleColumns"></can-edit-table> -->
                            </div>
                        </Col>
                        <Modal :width="900" v-model="showCurrentTableData">
                            <!-- <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table> -->
                        </Modal>
                    </Row>
                </Card>
            </Col>
        </Row>



        <Row class="margin-top-10">
            <Col span="12">
                <Card>
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        请求参数
                    </p>
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table14" 
                            :edit-incell="true" 
                            v-model="tableRequestData" 
                            :columns-list="tableRequestColumns"></can-edit-table>
                    </div>
                </Card>
            </Col>
            <Col span="12" class="padding-left-10">
                <Card>
                    <p slot="title">
                        <Icon type="android-more-horizontal"></Icon>
                        返回结果
                    </p>
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table3" 
                            v-model="tableResponseData" 
                            :hover-show="true" 
                            :edit-incell="true" 
                            :columns-list="tableResponseColumns"></can-edit-table>
                    </div>
                </Card>
            </Col>
        </Row>

    </div>
</template>

<script>
import canEditTable from '../../components/canEditTable.vue';
import tableData from '../../components/table_data.js';
import {
        getProjectList,
        getModuleList,
        getApiList,
        getRequestList,
        getResponseList,
        getDocGenCode
    } from '../../api/api';



export default {
    name: 'editable-table',
    components: {
        canEditTable
    },
    data () {
        return {
            table0:this,
            projectIdList:[],
            moduleIdList:[],
            apiIdList:[],
            requestIdList:[],
            responseIdList:[],


            tableProjectColumns: [],
            tableProjectData: [],
            tableModuleColumns: [],
            tableModuleData: [],
            tableApiColumns: [],
            tableApiData: [],
           
            tableRequestColumns: [],
            tableRequestData: [],

            tableResponseColumns: [],
            tableResponseData: [],

            showCurrentTableData: false
        };
    },
    methods: {
        getData () {
            this.tableProjectColumns = tableData.tableProjectColumns;
            // this.tableProjectData = tableData.tableProjectData;
            getProjectList(null).then((res) => {
                this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableProjectData = res.data.list;
            });

            this.tableModuleColumns = tableData.tableModuleColumns;
            getModuleList(null).then((res) => {
                // this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableModuleData = res.data.list;
            });


            this.tableApiColumns = tableData.tableApiColumns;
            getApiList(null).then((res) => {
                // this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableApiData = res.data.list;
            });

            this.tableRequestColumns = tableData.tableRequestColumns;
            getRequestList(null).then((res) => {
                // this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableRequestData = res.data.list;
            });

            this.tableResponseColumns = tableData.tableResponseColumns;
            getResponseList(null).then((res) => {
                // this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableResponseData = res.data.list;
            });

            this.showCurrentColumns = tableData.showCurrentColumns;
        },
        handleNetConnect (state) {
            this.breakConnect = state;
        },
        handleLowSpeed (state) {
            this.lowNetSpeed = state;
        },
        getCurrentData () {
            // this.showCurrentTableData = true;

            this.apiIdList =  this.tableApiData.map(function (item,index,input) {
                return item.id;
            });
            let para = {
                apiIdList : this.apiIdList
            };
            getDocGenCode(para);
        },
        handleDel (val, index) {
            this.$Message.success('删除了第' + (index + 1) + '行数据');
        },
        handleCellChange (val, index, key) {
            this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
        },
        handleChange (val, index) {
            this.$Message.success('修改了第' + (index + 1) + '行数据');
        },


        selectionProjectClick(arr) {
            

            this.projectIdList =  arr.map(function (item,index,input) {
                return item.id;
            });
            let para = {
                projectIdList : this.projectIdList
            };

            getModuleList(para).then((res) => {
                // this.$Loading.finish();
                // this.total = res.data.totalCount;
                this.tableModuleData = res.data.list;
            });

        },
        selectionModuleClick(arr) {
            this.moduleIdList =  arr.map(function (item,index,input) {
                return item.id;
            });

            let para = {
                moduleIdList : this.moduleIdList
            };

            getApiList(para).then((res) => {
                this.tableApiData = res.data.list;
            });
        },

        selectionApiClick(arr) {
            this.apiIdList =  arr.map(function (item,index,input) {
                return item.id;
            });
            let para = {
                apiIdList : this.apiIdList
            };

            // 请求参数
            getRequestList(para).then((res) => {
                this.tableRequestData = res.data.list;
            });

            // 返回结果
            getResponseList(para).then((res) => {
                this.tableResponseData = res.data.list;
            });

        },
        
    },
    created () {
        this.getData();
    }
};
</script>
