<!--
 * @文件描述: 解析xlsx文件 输出json
 * @创建人: 刘新书
 * @创建时间: 2020-09-18 16:44:03
-->

<template>
  <el-upload
    v-if="type==='drag'"
    drag
    action
    ref="commonXlsxToJson"
    :show-file-list="false"
    :multiple="false"
    :http-request="httpRequest"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="" slot="tip">提示：只能上传xlsx文件</div>
  </el-upload>
  <el-upload
    v-else-if="type==='button'"
    class
    ref="commonXlsxToJson"
    :show-file-list="false"
    action
    :multiple="false"
    :http-request="httpRequest"
  >
    <el-button size="medium" type="primary">选取文件</el-button>
  </el-upload>
</template>
<script>
export default {
  name: "CommonXlsxToJson",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    httpRequest(e) {
      let file = e.file; // 文件信息
      var type = file.name.split(".");
      if (type[type.length - 1] !== "xlsx" && type[type.length - 1] !== "xls") {
        this.$message.error("只能选择excel文件导入");
        return false;
      }
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e) => {
        const data = e.target.result;
        const zzexcel = window.XLS.read(data, {
          type: "binary",
        });
        const result = [];
        for (let i = 0; i < zzexcel.SheetNames.length; i++) {
          const newData = window.XLS.utils.sheet_to_json(
            zzexcel.Sheets[zzexcel.SheetNames[i]]
          );
          result.push(...newData);
        }
        this.$refs.commonXlsxToJson.clearFiles();
        this.$emit("callback", result);
      };
    },
  },
};
</script>

