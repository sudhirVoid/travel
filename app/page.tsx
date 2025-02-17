'use client';
import { useEffect, useState } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Home = () => {
	const [responseText, setResponseText] = useState('');
	const [sessionId, setSessionId] = useState('');

	// Function to generate a unique session ID
	const generateSessionId = () => {
		return `session-${Math.random().toString(36).substr(2, 9)}`;
	};

	useEffect(() => {
		// Retrieve or generate a session ID
		let storedSessionId = localStorage.getItem('chatSessionId');
		if (!storedSessionId) {
			storedSessionId = generateSessionId();
			localStorage.setItem('chatSessionId', storedSessionId);
		}
		setSessionId(storedSessionId);

		const fetchChatResponse = async () => {
			try {
				const chat = await createChat({
					webhookUrl: 'https://aigabis.app.n8n.cloud/webhook/35299dc4-0c15-4f24-8303-1ff21a19f0eb/chat',
					sessionId: storedSessionId // Pass session ID
				});

				chat.on('message', (message) => {
					setResponseText(message.text);
				});
			} catch (error) {
				console.error('Error fetching chat response:', error);
			}
		};

		fetchChatResponse();
	}, []);

	return (
		<div>
			<p>Session ID: {sessionId}</p>
			<p>{responseText || 'Waiting for response...'}</p>
		</div>
	);
};

export default Home;
