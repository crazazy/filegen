<template>
    <div>
        <h1 id="name">Browse files in {{name}}</h1>
        <div id="list">
            <div v-if="parents.length > 0" class="segment">
                <button @click="leave()" class="go-up">../</button>
            </div>
            <div v-for="file in currentDirectory.children" class="segment">
                <a v-if="file.type === 'directory'" @click="enter(file)">📁 {{ file.name }}</a>
                <a v-else @click="goto(file)">📄 {{ file.name }}</a>
            </div>
	</div>
	<pre class="fileContent" v-if="fileContent">
	    <code>
	    {{fileContent}}
	    </code>
	</pre>
    </div>
</template>

<script>
import FILES from '../assets/files.json';
export default {
    data: function() {
        return {
            content: FILES,
            parents: [],
            currentDirectory: FILES,
            fileContent: null
        }
    },
    methods: {
        goto: function(file) {
            fetch(`./files/${file.path}`)
                .then(res => res.text())
                .then(res => this.fileContent = '\n' + res)
                .then(()  => this.enter(file))
        },
        enter: function(directory) {
            this.parents.push(this.currentDirectory);
            this.currentDirectory = directory;
        },
        leave: function() {
            this.currentDirectory = this.parents.pop();
            this.fileContent = null;
        }
    },
    computed: {
        name: function() {
            return this.currentDirectory.name;
        }
    }
}
</script>
