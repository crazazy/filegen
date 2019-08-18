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
    </div>
</template>

<script>
import FILES from '../assets/files.json';
export default {
	data: function() {
		return {
			content: FILES,
			parents: [],
			currentDirectory: FILES
		}
	},
	methods: {
		goto: function(file) {
			window.location.href = `./files/${file.path}`
		},
		enter: function(directory) {
			this.parents.push(this.currentDirectory);
			this.currentDirectory = directory;
		},
		leave: function() {
			this.currentDirectory = this.parents.pop();
		}
	},
	computed: {
		name: function() {
			return this.currentDirectory.name;
		}
	}
}
</script>
