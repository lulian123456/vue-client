<template>
	<div class="swiper-container">

		<div class="swiper-wrapper">

			<div class="swiper-slide" :to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}" v-for="(item,index) of data"
			 :key="item._id">
				<img :src="item.banner" alt="" />
				<div class="text-box">
					<h2>{{item.title}}</h2>
					<p>{{item.sub_title}}</p>
				</div>
			</div>

			<!-- 如果需要分页器 -->

			<div class="swiper-pagination"></div>

		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'

	export default {
		name: 'banner',
		//data = [{_id:1,banner:xx,title:xx,sub_title:xx},..,..]
		// props:['data','collectionName'],
		props: {
			data: {
				type: Array,
				required: true
			},
			collectionName: {
				type: String,
				required: true
			}
		},

		components: {},
		mounted() {
			this.data.length && this.initBanner()
		},
		updated() {
			this.initBanner()
		},
		methods: {
			initBanner() {
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'horizontal',
					loop: true,
					autoplay: 2000,
					speed: 2000,
					pagination: {
						el: '.swiper-pagination',
					},
					autoplayDisableOnInteraction: false,
				});
			}
		}
	}
</script>

<style scoped>
	.swiper-slide {
		position: relative;
		overflow: hidden;
		z-index: 1;
		width: 6.4rem;
		float: left;
	}

	.swiper-slide img {
		width: 100%;
		display: block;
	}

	.swiper-slide .text-box {
		width: 5.8rem;
		padding: 0 0.3rem;
		height: 1.24rem;
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		background: rgba(0, 0, 0, 0.5);
	}

	.text-box h2 {
		font-size: 0.3rem;
		font-weight: normal;
		margin-top: 0.22rem;
		line-height: 100%;
		margin-bottom: 0.22rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.text-box p {
		line-height: 100%;
	}

	.banner ol {
		position: absolute;
		right: 0.2rem;
		bottom: 0.2rem;
	}

	.banner ol li {
		width: 0.15rem;
		height: 0.15rem;
		background: #5477b2;
		float: left;
		border-radius: 50%;
		margin-right: 0.08rem;
	}

	.banner ol li.active {
		background: #fff;
	}
</style>
