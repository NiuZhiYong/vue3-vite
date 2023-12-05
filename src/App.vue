<script setup lang="ts">
import {
    reactive
} from 'vue'
import HelloWorld from './components/hello-world.vue';
import Tree from './components/tree.vue';
import { Storage } from './utils//storage';
import Card from './components/card.vue';
let name = 'asdss'
const showMsg = (param: any) => {
    const storage = new Storage();
    storage.set('name', param.name, new Date().getTime() + 5000);
    storage.set('age', param.age, new Date().getTime() + 5000);

    // setInterval(() => {
    //   console.log(storage.get('name'));
    //   console.log(storage.get('age'));
    // }, 500)
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
</style>