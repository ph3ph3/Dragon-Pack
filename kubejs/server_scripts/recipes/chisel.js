ServerEvents.recipes(event => {
	event.shaped(
		Item.of('rechiseled:chisel', 1),
		[
			' s',
			'i '
		],
		{
			i: 'minecraft:iron_ingot',
			s: 'minecraft:stick'
		}
	),
	
	event.remove({ id: 'rechiseled:chisel' })
})