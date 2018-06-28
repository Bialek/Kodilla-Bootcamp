import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
	return (
		<div className="App">
			<h1>Lorem ipsum</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit libero, tincidunt id justo egestas, porta venenatis augue. Aliquam gravida neque nisl, a luctus turpis consectetur non. Donec tincidunt convallis turpis, in posuere mi. Nam ut egestas eros, rutrum tincidunt neque. Aliquam aliquet auctor neque, a pulvinar augue faucibus et. In a venenatis sapien. Nunc auctor tortor nunc, a porta nulla tincidunt ut. In condimentum fermentum bibendum.</p>
			<p>Morbi nec urna nec tortor rhoncus faucibus non maximus nulla. Nunc blandit, elit sit amet congue pretium, ex quam porttitor nibh, at commodo mi risus ac nunc. Suspendisse et sapien et mauris laoreet rutrum. Aenean ornare mi nec enim sagittis, vitae lobortis tortor pretium. Mauris ut rhoncus justo. Mauris ultricies massa non dolor ullamcorper fringilla. Quisque convallis neque at nisl placerat, a egestas enim suscipit.</p>
			<p>Praesent maximus nisi rutrum diam ornare tristique. Ut sem ante, lobortis vel fermentum ac, finibus ut nunc. Integer et est sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere pellentesque est sed scelerisque. Aenean et lacus quis dolor consequat fermentum eu non purus. Nulla accumsan volutpat libero, non porttitor leo consequat non. Quisque varius, mi ut egestas lobortis, ante sem imperdiet velit, vitae elementum sapien velit sit amet purus. Cras rhoncus libero leo. Vivamus malesuada a nunc quis gravida. Nunc lobortis lorem risus, at laoreet nibh ultrices quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et elit porta, faucibus leo nec, tempor purus.</p>
			<CommentsListContainer />
		</div>
	);
};

export default App;
