<template>
    <div>
        <div style="margin: 0 0 10px 5px;overflow: hidden">
            <Input v-model="queryTableName" placeholder="输入表名称..." style="width: 300px"></Input> 
            <Button type = "ghost" icon="ios-search"  @click="queryList">查询</Button> 
            <Button type="primary" icon="arrow-down-a"@click="geneMysqlCode">生成代码</Button>
        </div>
        <i-table :context="self" :data="tableData" :columns="tableColumns"
            @on-selection-change='selectionClick'
            stripe border></i-table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="total" :current="page" @on-change="changePage" show-total></Page>
            </div>
        </div>
    </div>
</template>
<script>
// 请求数据
import {
        getMysqlListPage,
        getMysqlGeneCode
    } from '../../api/api';

// 页面控制
export default {
    data() {
        return {
            self: this,
            queryTableName: '',
            tableNameList: [],
            tableData:[],
            total: 0,
            page: 1,
            tableColumns: [
                {
                    type: 'selection',
                    name: 'selectedItem',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '表名',
                    key: 'tableName',
                    align: 'center'
                },
                {
                    title: 'Engine',
                    key: 'engine',
                    align: 'center',
                    sortable: true
                },
                {
                    title: '表备注',
                    key: 'tableComment',
                    align: 'center',
                    width: 300
                },
                {
                    title: '创建日期',
                    key: 'createTime',
                    align: 'center',
                    sortable: true
                }
            ]
        }
    },
    methods: {
        init() {
            let para = {
                    page : this.page
                };
            this.$Loading.start();
            getMysqlListPage(para).then((res) => {
                this.$Loading.finish();
                this.total = res.data.totalCount;
                this.tableData = res.data.list;
            });
        },

        queryList() {
            let para = {
                page : 1,
                tableName : this.queryTableName
            }
            getMysqlListPage(para).then((res) => {
                this.$Loading.finish();
                this.total = res.data.totalCount;
                this.tableData = res.data.list;
            });
        },

        geneMysqlCode() {
            if(this.tableNameList == false){  
                //data为空数组时
               this.$Modal.error({
                            title: "错误提示",
                            content: "请选择表信息"
                    });
               return;
            }  

            let para = {
                    tables : JSON.stringify(this.tableNameList)
                };
            getMysqlGeneCode(para);
        },

        selectionClick(arr) {
            this.tableNameList =  arr.map(function (item,index,input) {
                return item.tableName;
            });
        },

        show() {

        },
        remove(){

        },
        changePage() {

        }
    },
    mounted() {
        this.init();
    }
}
</script>


