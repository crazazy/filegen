<template>
    <div>
        <h1 id="name">Browse files in {{name}}</h1>
        <div id="list">
            <div v-if="parents.length" class="segment">
                <a @click="leave()" class="go-up">../</a>
            </div>
            <div v-for="file in currentDirectory.children" class="segment">
                <a v-if="file.type === 'directory'" @click="enter(file)">&#x1F4C2; {{ file.name }}</a>
                <a v-else :href="`./files/${file.path}`">&#x1F5CE; {{ file.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import FILES from '../assets/files.json';

@Component({
    components: {}
})
export default class App extends Vue {
    content = FILES;
    parents = [];
    currentDirectory = FILES;

    get name() {
        return [...this.parents.map(x=>x.name), this.currentDirectory.name].join('/');
    }

    enter(directory) {
        this.parents.push(this.currentDirectory);

        this.currentDirectory = directory;
    }

    leave() {
        this.currentDirectory = this.parents.pop();
    }
}
</script>
