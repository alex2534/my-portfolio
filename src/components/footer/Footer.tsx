export default function Footer() {
	return (
		<footer className="w-full border-t bg-white text-sm text-gray-500">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-0">
				<p>© Alex Rodrigues do Nascimento. All rights reserved.</p>
				<div className="flex space-x-4">
					<a href="/privacy" className="hover:underline">
						Privacy Policy
					</a>
					<a href="/terms" className="hover:underline">
						Terms of Service
					</a>
					<a href="/contact" className="hover:underline">
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
}
