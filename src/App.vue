<script setup lang="ts">
import {
    ref,
    reactive,
    markRaw,
    shallowRef
} from 'vue'
import HelloWorld from './components/hello-world.vue';
import Tree from './components/tree.vue';
import AVue from './components/componentA.vue';
import BVue from './components/componentB.vue';
import CVue from './components/componentC.vue';
import { Storage } from './utils//storage';
import Card from './components/card.vue';
let name = 'asdss'
const active = ref(0);
const comId = shallowRef(AVue);
const showMsg = (param: any) => {
    const storage = new Storage();
    storage.set('name', param.name, new Date().getTime() + 5000);
    storage.set('age', param.age, new Date().getTime() + 5000);

    // setInterval(() => {
    //   console.log(storage.get('name'));
    //   console.log(storage.get('age'));
    // }, 500)
}

const switchButton = (item: any, index: any) => {
    comId.value = item.com;
    active.value = index;
}

interface TreeData {
    id: string;
    name: string;
    checked: boolean;
    children?: TreeData[];
}
// const calc = (a: number, b: number) => {
//     return a + b
// }

// console.log(calc(10, 20))

const comData = reactive([
    {
        name: 'A组件',
        com: markRaw(AVue)
    }, {
        name: 'B组件',
        com: markRaw(BVue)
    }, {
        name: 'C组件',
        com: markRaw(CVue)
    }
])

const data = reactive<TreeData[]>([
    {
        id: '1',
        name: '1',
        checked: false,
        children: [
            {
                id: '1-1',
                name: '1-1',
                checked: false,
                children: [
                    {
                        id: '1-1-1',
                        name: '1-1-1',
                        checked: false,
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '2',
        checked: false,
        children: [
            {
                id: '2-1',
                name: '2-1',
                checked: false,
            }
        ]
    },
    {
        id: '3',
        name: '3',
        checked: false
    }
]);
</script>

<template>
    <div>
        <h1>asdddddd</h1>
    </div>
    <div>
        <HelloWorld @on-click="showMsg" :title="name"></HelloWorld>
    </div>
    <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
    <div>
        <Tree :data="data"></Tree>
    </div>
    <div class="trends-com">
        <div @click="switchButton(item, index)" :class="[active == index ? 'active' : '']" class="trends-com-item"
            :key="index" v-for="(item, index) in comData">
            <div class="trends-com-item-name">{{ item.name }}</div>
        </div>
    </div>
    <div class="trends-com-body">
        <component :is="comId"></component>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.trends-com {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
    justify-content: center;
}

.trends-com-item {
    flex: 1 1 200px;
    margin: 1em;
    padding: 1em;
    text-align: center;
    border-radius: 1em;
    background-color: #fff;
    box-shadow: 0 0 2em #00000022;
    transition: box-shadow 300ms;
}

.active {
    background-color: azure;
    box-shadow: 0 0 2em #42b883aa;
}

.trends-com-item-name {
    font-size: 14px;
    font-weight: 600;
    color: #333;
}
</style>