export interface Project {
	name: string;
	desc: string;
	detailedDesc: string;
	href?: string;
	site?: string;
	isInDevelopment?: boolean;
}

export const projects: Project[] = [
	{
		name: 'RoadStud',
		desc: 'Dash cam application for iOS providing driver safety warnings.',
		detailedDesc:
			'A dash cam application for iOS providing driver safety warnings such as lane departure and forward collision alerts. Derived from the openpilot framework, it is optimized for the iOS environment, utilizing Swift and Core ML for real-time vision processing and monitoring.',
		isInDevelopment: true
	},
	{
		name: 'PassPlaza',
		desc: 'A peer-to-peer, passive data exchange platform for iOS.',
		detailedDesc:
			'A local-first passive social media experience for peer-to-peer data exchange between nearby devices. It uses Bluetooth Low Energy and Wi-Fi Aware as transport options and utilizes Live Activities for background operations, enabling persistent discovery and data transfer for application-specific payloads.',
		isInDevelopment: true
	},
	{
		name: 'Classy',
		desc: 'A local-first tool for developing, testing, and iterating on LLM classification prompts.',
		detailedDesc:
			'Classy is a local-first, web-based tool for developing, testing, and iterating on LLM classification prompts. Designed specifically for companies with strict DPA requirements, it ensures all customer information is processed locally using browser-based IndexedDB storage, preventing sensitive data from ever leaving the client environment. It features support for running local LLMs and includes an integrated MCP server, enabling fast, agent-powered iteration.',
		href: 'https://classy.jpadams.xyz',
		site: 'Website'
	},
	{
		name: 'Comment-On',
		desc: 'A web-based commenting platform with passkey-based authentication.',
		detailedDesc:
			'A decentralized-style commenting platform built with Deno and Fresh. It features secure, passwordless authentication using WebAuthn (passkeys) and uses Deno KV for robust, atomic data storage.',
		href: 'https://comment-on.com',
		site: 'Website'
	},
	{
		name: 'Cup Trail',
		desc: 'A drink-centric café discovery and review application.',
		detailedDesc:
			'Cup Trail changes how we discover cafés by focusing on drinks rather than shops. Users can see what others are ordering and enjoying at specific locations, building a personalized, visual record of their café adventures. Built with Supabase and React.',
		href: 'https://github.com/cup-trail/cup-trail',
		site: 'GitHub'
	},
	{
		name: 'Catch-up',
		desc: 'An award-winning SwiftUI application for social reminders.',
		detailedDesc:
			'Built in 48 hours for SD Hacks, Catch-up is a mobile app that helps users maintain social connections by sending gentle reminders to reach out to friends and family. It won 1st place in the Health and Wellbeing category.',
		href: 'https://devpost.com/software/catch-up-pzlmji',
		site: 'DevPost'
	}
];
