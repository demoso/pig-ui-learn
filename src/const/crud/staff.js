export const tableOption = {
    "align":"center",
    "index":true,
    "border":true,
    "column":[
      {
        "prop":"staffNo",
        "type":"input",
        "label":"编号",
        editDisplay:false,
        addDisplay: false,
      },
      {
        "prop":"name",
        "type":"input",
        "label":"名称",
        addDisplay: false,
        editDisplay:false,
      },
      {
        "prop":"sex",
        "span":12,
        "type":"select",
        hide: true,
        addDisplay: false,
        editDisplay: false,
        "label":"性别",
        "dicData":[
          {
            "label":"男",
            "value":0
          },
          {
            "label":"女",
            "value":1
          },
          {
            "label":"不详",
            "value":2
          }
        ],
        "clearable":true
      },
      {
        "prop":"age",
        "type":"input",
        hide: true,
        "label":"年龄",
        addDisplay: false,
        editDisplay: false
      },
      {
        "prop":"deptId",
        hide: true,
        "span":12,
        "label":"部门",
        "slot": true,
        formslot: true,
        addDisplay: false,
        editDisplay:false,
        "dataType":"number",
        "rules": [{
          required: true,
          "message": '请选择部门',
          "trigger": 'change'
        }]
      },
      {
        "prop":"adress",
        "type":"input",
        hide: true,
        "label":"详细住址",
        addDisplay: false,
        editDisplay:false,
      },
      {
        "prop":"phone",
        "type":"input",
        "label":"电话",
        addDisplay: false,
        editDisplay:false,
      },
      {
        "prop":"userId",
        "type":"input",
        hide: true,
        "label":"系统账号",
        addDisplay: false,
        editDisplay:false,
        "readonly":true
      },
      {
        "prop":"roleType",
        "span":12,
        "type":"select",
        "label":"角色",
        "dicData":[
          {
            "label":"经销商",
            "value":"1"
          },
          {
            "label":"维修员",
            "value":"2"
          }
        ],
        addDisplay: false,
        editDisplay: false
      },
      {
        "prop":"levelId",
        "span":12,
        "type":"select",
        hide: true,
        "label":"级别",
        "dicUrl":"http://pigx-gateway:9999/demo/level/list",
        addDisplay: false,
        editDisplay:false,
        "dicMethod":"get"
      },
      {
        "prop":"entryTime",
        "span":12,
        "type":"date",
        "label":"入职时间",
        "rules":[

        ],
        "format":"yyyy-MM-dd",
        addDisplay: false,
        editDisplay:false,
        "required":false,
        "valueFormat":"yyyy-MM-dd"
      },
      {
        "prop":"referrer",
        "type":"input",
        "label":"推荐人",
        hide: true,
        addDisplay: false,
        editDisplay:false,
        "maxlength":50
      },
      {
        "prop":"createBy",
        "type":"input",
        hide: true,
        "label":"创建人",
        addDisplay: false,
        editDisplay:false,
        "readonly":true
      },
      {
        "prop":"wxOpenid",
        "type":"input",
        "label":"微信关联",
        addDisplay: false,
        editDisplay:false,
        hide: true,
        "readonly":true
      },
      {
        "prop":"createTime",
        "type":"input",
        "label":"创建时间",
        addDisplay: false,
        editDisplay:false,
        "readonly":true
      },
      {
        "prop":"updateTime",
        "type":"input",
        "label":"更新时间",
        hide: true,
        addDisplay: false,
        editDisplay:false,
        "readonly":true
      },
      {
        "prop":"username",
        "span":12,
        "type":"input",
        hide: true,
        "label":"用户名",
        editDisplay:false,
        addDisplay: false,
      },
      {
        "prop":"password",
        "span":12,
        hide: true,
        "type":"input",
        editDisplay:false,
        "label":"密码",
        addDisplay: false,
      }
    ],
    "gutter":0,
    "stripe":true,
    "menuBtn":true,
    "emptyBtn":true,
    "emptySize":"medium",
    "emptyText":"清空",
    "menuAlign":"center",
    "submitBtn":true,
    "indexLabel":"序号",
    "labelWidth":90,
    "submitSize":"medium",
    "submitText":"提交",
    "labelSuffix":"：",
    "menuPosition":"center",
    "labelPosition":"right",
    "searchMenuSpan":6,
  group: [
    {
      label: '员工信息',
      prop: 'jbxx',
      hide: true,
      icon: 'el-icon-edit-outline',
      "align":"center",
      "index":true,
      "border":true,
      "column":[
        {
          "prop":"staffNo",
          "type":"input",
          "label":"编号",
          addDisplay: false,
        },
        {
          "prop":"name",
          "type":"input",
          "label":"名称",
          "display":true
        },
        {
          "prop":"sex",
          "span":12,
          "type":"select",
          hide: true,
          "label":"性别",
          "dicData":[
            {
              "label":"男",
              "value":0
            },
            {
              "label":"女",
              "value":1
            },
            {
              "label":"不详",
              "value":2
            }
          ],
          "display":true,
          "clearable":true
        },
        {
          "prop":"age",
          "type":"input",
          hide: true,
          "label":"年龄",
          "display":true
        },
        {
          "prop":"deptId",
          hide: true,
          "span":12,
          "label":"部门",
          "slot": true,
          formslot: true,
          "display":true,
          "dataType":"number",
          "rules": [{
            required: true,
            "message": '请选择部门',
            "trigger": 'change'
          }]
        },
        {
          "prop":"adress",
          "type":"input",
          hide: true,
          "label":"详细住址",
          "display":true
        },
        {
          "prop":"phone",
          "type":"input",
          "label":"电话",
          "display":true
        },
        {
          "prop":"userId",
          "type":"input",
          hide: true,
          "label":"系统账号",
          addDisplay: false,
          "readonly":true
        },
        {
          "prop":"roleType",
          "span":12,
          "type":"select",
          "label":"角色",
          "dicData":[
            {
              "label":"经销商",
              "value":"1"
            },
            {
              "label":"维修员",
              "value":"2"
            }
          ],
          "display":true
        },
        {
          "prop":"levelId",
          "span":12,
          "type":"select",
          hide: true,
          "label":"级别",
          "dicUrl":"http://pigx-gateway:9999/demo/level/list",
          "display":true,
          "dicMethod":"get"
        },
        {
          "prop":"entryTime",
          "span":12,
          "type":"date",
          "label":"入职时间",
          "rules":[

          ],
          "format":"yyyy-MM-dd",
          "display":true,
          "required":false,
          "valueFormat":"yyyy-MM-dd"
        },
        {
          "prop":"referrer",
          "type":"input",
          "label":"推荐人",
          hide: true,
          "display":true,
          "maxlength":50
        },
        {
          "prop":"createBy",
          "type":"input",
          hide: true,
          "label":"创建人",
          addDisplay: false,
          "readonly":true
        },
        {
          "prop":"wxOpenid",
          "type":"input",
          "label":"微信关联",
          addDisplay: false,
          hide: true,
          "readonly":true
        },
        {
          "prop":"createTime",
          "type":"input",
          "label":"创建时间",
          addDisplay: false,
          "readonly":true
        },
        {
          "prop":"updateTime",
          "type":"input",
          "label":"更新时间",
          hide: true,
          addDisplay: false,
          "readonly":true
        }
      ]
    }, {
      label: '用户信息',
      hide: true,
      prop: 'yhxx',
      icon: 'el-icon-edit-outline',
      "align":"center",
      "index":true,
      "border":true,
      column: [
        {
          "prop":"username",
          "span":12,
          "type":"input",
          hide: true,
          "label":"用户名",
          "display":true
        },
        {
          "prop":"password",
          "span":12,
          hide: true,
          "type":"input",
          "label":"密码",
          "display":true
        }
      ]
    }
  ]
  }

