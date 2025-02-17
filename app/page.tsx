'use client';
import { useEffect, useState } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Home = () => {
	const [responseText, setResponseText] = useState('');

	useEffect(() => {
		const fetchChatResponse = async () => {
			try {
				const response = await createChat({
					webhookUrl: 'https://aigabis.app.n8n.cloud/webhook/35299dc4-0c15-4f24-8303-1ff21a19f0eb/chat'
				});
				console.log(response); 
			} catch (error) {
				console.error('Error fetching chat response:', error);
			}
		};

		fetchChatResponse();
	}, []);

	return (
		<div>
			<p>{responseText}</p> {/* Display the filtered response text */}
		</div>
	);
};

export default Home;