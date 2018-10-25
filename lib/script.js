const content = new Vue({
	el: '#app',
	data: {
		content: tree,
		depth: [],
		currFolder: [tree.name]
	},
	methods : {
		deeper: function(e) {
			let currentTree = this.content
			const index = currentTree.children.findIndex(x=>e.name==x.name)
			this.depth.push(index)
			this.content = currentTree.children[index]
			this.currFolder.push(this.content.name)
		},
		higher: function() {
			this.depth.pop()
			let copy = tree
			this.depth.map(x=>{copy=copy.children[x]})
			this.content = copy
			this.currFolder.pop()
		}
	}
})

const name = new Vue({
	el: '#name',
	computed: {
		name: function() {
			return content.currFolder.join('/')
		}
	}
})