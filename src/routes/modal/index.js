import { h } from 'preact'
import Helmet from 'preact-helmet'

const Modal = () => (
	<div>
		<Helmet
			link={[
				{ rel: 'stylesheet', href: 'https://trello.com/power-ups/power-up.css' }, 
			]}

			script={[
				{ src: "https://p.trellocdn.com/power-up.min.js" },
				{ src:"https://code.jquery.com/jquery-3.3.1.min.js", integrity:"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=", crossorigin:"anonymous" },
				{ src:"https://api.trello.com/1/client.js?key=46de44619da128276ba5dda20e33d5e1" },
			]}
		/>
		<h1>Who should be assigned to which list?</h1>
		<p>It's simple, for any list in your board that always belongs to the same people. Set them here, and we'll assign the cards to them when cards are moved into that list</p>
		<div>
			<div className="list">
				<h2 className="list__heading">Backlog</h2>
				<div className="list__members">
					<li className="item js-member-item ${when(isActive, 'active')}" data-member-id="${id}">
						<a href="#">
							<span className="member">
								${when(avatar, `
														<img className="member-avatar" height="30" width="30" src="${avatar}" alt="${fullName} (${username})" title="${fullName} (${username})">
												`, `
														<span className="member-initials" title="${fullName} (${username})">${initials}</span>
												`)}
											</span>
											<span className="full-name">${fullName} (<span className="username">${username}</span>)</span>
											<span className="icon-sm icon-check"></span>
										</a>
									</li>
				</div>
			</div>
		</div>
	</div>
)

export default Modal

