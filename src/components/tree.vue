<script setup lang="ts">

interface TreeData {
    id: string;
    name: string;
    checked: boolean;
    children?: TreeData[];
}

defineProps<{
    data?: TreeData[];
}>()


</script>
<template>
    <div v-for="item in data" :key="item.id" class="tree-item" :class="{ checked: item.checked }">
        <span class="tree-item-checkbox">
            <input type="checkbox" :checked="item.checked" @change="item.checked = !item.checked">
            <span class="tree-item-name">{{ item.name }}</span>
            <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
        </span>
    </div>
</template>

<style lang="less">
.tree-item {
    margin-left: 40px;
}
</style>