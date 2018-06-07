export const tableProjectColumns = [
    {
        type: 'selection',
        width: 60,
        align: 'center'
    },
    {
        title: '名称',
        align: 'center',
        key: 'name',
        editable: true
    },
    {
        title: '描述',
        align: 'center',
        key: 'desc',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 90,
        key: 'handle',
        handle: ['delete']
    }
];

export const tableModuleColumns = [
    {
        title: '序号',
        type: 'selection',
        width: 60,
        align: 'center'
    },
    {
        title: '名称',
        align: 'center',
        key: 'name',
        editable: true
    },
    {
        title: '描述',
        align: 'center',
        key: 'projectId'
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];


export const tableApiColumns = [
    {
        title: '序号',
        type: 'selection',
        width: 60,
        align: 'center'
    },
    {
        title: '名称',
        align: 'center',
        key: 'name',
        editable: true
    },
    {
        title: 'URL路径',
        align: 'center',
        key: 'url',
        editable:true
    },
    {
        title: '访问方式',
        align: 'center',
        key: 'method',
        editable:true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const tableRequestColumns = [
    {
        title: '序号',
        type: 'index',
        width: 60,
        align: 'center'
    },
    {
        title: '字段',
        align: 'center',
        key: 'field',
        editable: true
    },
    {
        title: '类型',
        align: 'center',
        key: 'type',
        editable:true
    },
    {
        title: '描述',
        align: 'center',
        key: 'desc',
        editable:true
    },
    {
        title: '是否为空',
        align: 'center',
        key: 'isNullable',
        editable:true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];

export const tableResponseColumns = [
    {
        title: '序号',
        type: 'index',
        width: 60,
        align: 'center'
    },
    {
        title: '字段',
        align: 'center',
        key: 'field',
        editable: true
    },
    {
        title: '类型',
        align: 'center',
        key: 'type',
        editable:true
    },
    {
        title: '描述',
        align: 'center',
        key: 'desc',
        editable:true
    },
    {
        title: '操作',
        align: 'center',
        width: 120,
        key: 'handle',
        handle: ['delete']
    }
];


export const showCurrentColumns = [
    {
        title: '序号',
        type: 'selection',
        width: 80,
        align: 'center'
    },
    {
        title: '姓名',
        align: 'center',
        key: 'name',
        width: 300,
        editable: true
    },
    {
        title: '性别',
        align: 'center',
        key: 'sex'
    },
    {
        title: '岗位',
        align: 'center',
        width: 300,
        key: 'work',
        editable: true
    }
];

const tableData = {
    tableProjectColumns: tableProjectColumns,
    tableModuleColumns: tableModuleColumns,
    tableApiColumns: tableApiColumns,
    tableRequestColumns: tableRequestColumns,
    tableResponseColumns: tableResponseColumns,
    showCurrentColumns: showCurrentColumns
};

export default tableData;
