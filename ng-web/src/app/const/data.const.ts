import { IPartner } from "../models/data.model";
import { ISpeaker, ITalk, ROOM_NAME } from "../models/speaker.model";

export const NgKenyaPartners: IPartner[] = [
	{
		official_website: "https://google.com/",
		logo: "./Images/logos/sponsors/google.png",
		alt: "Google logo",
	},
	{
		official_website: "https://angular.dev/",
		logo: "./Images/logos/sponsors/angular_wordmark.png",
		alt: "Angular",
	},
	{
		official_website: "https://paydhq.com/",
		logo: "./Images/logos/sponsors/payd.svg",
		alt: "Payd",
	},
	{
		official_website: "https://www.jetbrains.com/",
		logo: "./Images/logos/sponsors/jetbrains-logo.png",
		alt: "Jetbrains logo",
	},
	{
		official_website: "https://ihub.co.ke/",
		logo: "./Images/logos/sponsors/ihub.png",
		alt: "Ihub Logo",
	},
];

export const ticketUrl = "https://vabu.app/ngkenya-2025";
export const ngKenya2024Photos = "https://photos.app.goo.gl/UHZCwSEV2JkMzbYw7";
export const ngKenya2024Feedback = "https://forms.gle/xZ9UbyZpfpm1ESwa9";

//2025
export const ngKenya2025Photos = "https://photos.app.goo.gl/rxDqdeM5tbLq6nv89";
export const ngKenya2025CallForSpeakers =
	"https://sessionize.com/ng-kenya-2025";
export const sponsorhsip_Deck =
	"https://docs.google.com/presentation/d/1UPa73RxOo3aJppY-QjkWCtMV6b14TvHn/edit?usp=sharing&ouid=104844680073323721667&rtpof=true&sd=true";

export const ngKenya2025Feedback = "https://forms.gle/DYApza41NXrdj67UA";
export const eventStats: {
	icon: string;
	count: number | string;
	type: "%" | "+" | "";
	label: string;
}[] = [
	{
		icon: "calendar-days",
		count: "2 Days",
		type: "",
		label: "JUly 4th & July 5th ",
	},

	{
		icon: "network",
		count: 10,
		type: "+",
		label: "Speakers",
	},
	{
		icon: "spool",
		count: 4,
		type: "+",
		label: "Workshop ",
	},
];

export const ATeam: {
	name: string;
	imageLink: string;
	role: string;
}[] = [
	{
		name: "Wayne Gakuo",
		imageLink: "assets/Images/speakers/wayne.jpg",
		role: "Lead",
	},
	{
		name: "Joy Linda Wawira",
		imageLink: "assets/Images/speakers/joy_linda.png",
		role: "Co-Lead",
	},
	{
		name: "Winnie Mandela",
		imageLink: "assets/Images/speakers/madi.jpg",
		role: "Community Manager",
	},
];
