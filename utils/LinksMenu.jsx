import {
  CodewarsIcon,
  DevIcon,
  FacebookIcon,
  FreeCodeIcon,
  FrontendMentorIcon,
  GitIcon,
  GitLabIcon,
  HashNodeIcon,
  LinkedinIcon,
  StackIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
  CodePenIcon
} from "@/components/svgs/LinksMenu/SelectInputSvgs"


export const LinksMenu = [
  {
    id: 1,
    color: '#1A1A1A',
    value: 'github',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <GitIcon /> Github
      </span>
    ),
  },
  {
    id: 2,
    color: '#fff',
    value: 'Frontend Mentors',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <FrontendMentorIcon />
        Frontend Mentors
      </span>
    ),
  },
  {
    id: 3,
    color: '#43B7E9',
    value: 'Twitter',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <TwitterIcon />
        Twitter
      </span>
    ),
  },
  {
    id: 4,
    color: '#2D68FF',
    value: 'Linkedin',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <LinkedinIcon />
        Linkedin
      </span>
    ),
  },
  {
    id: 5,
    color: '#EE3939',
    value: 'Youtube',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <YoutubeIcon />
        Youtube
      </span>
    ),
  },
  {
    id: 6,
    color: '#2442AC',
    value: 'Facebook',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <FacebookIcon />
        Facebook
      </span>
    ),
  },
  {
    id: 7,
    color: '#EE3FC8',
    value: 'Twitch',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <TwitchIcon /> Twitch
      </span>
    ),
  },
  {
    id: 8,
    color: '#333',
    value: 'Dev.to',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <DevIcon /> Dev.to
      </span>
    ),
  },
  {
    id: 9,
    color: '#8A1A50',
    value: 'Codewars',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <CodewarsIcon /> Codewars
      </span>
    ),
  },
  {
    id: 10,
    color: '#8A1A50',
    value: 'Codepen',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <CodePenIcon />
        Codepen
      </span>
    ),
  },
  {
    id: 11,
    color: '#302267',
    value: 'FreeCodeCamp',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <FreeCodeIcon />
        FreeCodeCamp
      </span>
    ),
  },
  {
    id: 12,
    color: '#EB4925',
    value: 'Gitlab',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <GitLabIcon />
        Gitlab
      </span>
    ),
  },
  {
    id: 13,
    color: '#0330D1',
    value: 'HashNode',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <HashNodeIcon />
        HashNode
      </span>
    ),
  },
  {
    id: 14,
    color: '#EC7100',
    value: 'Stachoverflow',
    label: (
      <span className="flex items-center gap-2 text-dark-grey">
        <StackIcon />
        Stachoverflow
      </span>
    ),
  },
]


export const displayLinks = [
  {
    id: 1,
    color: '#1A1A1A',
    value: 'github',
    label: (
      <span className="flex items-center gap-2 ">
        <GitIcon color="#fff" /> Github
      </span>
    ),
  },
  {
    id: 2,
    color: '#fff',
    value: 'Frontend Mentors',
    label: (
      <span className="flex items-center gap-2 text-dark-grey-color-light">
        <FrontendMentorIcon color="#333" />
        Frontend Mentors
      </span>
    ),
  },
  {
    id: 3,
    color: '#43B7E9',
    value: 'Twitter',
    label: (
      <span className="flex items-center gap-2 ">
        <TwitterIcon color="#fff" />
        Twitter
      </span>
    ),
  },
  {
    id: 4,
    color: '#2D68FF',
    value: 'Linkedin',
    label: (
      <span className="flex items-center gap-2 ">
        <LinkedinIcon color="#fff" />
        Linkedin
      </span>
    ),
  },
  {
    id: 5,
    color: '#EE3939',
    value: 'Youtube',
    label: (
      <span className="flex items-center gap-2 ">
        <YoutubeIcon color="#fff" />
        Youtube
      </span>
    ),
  },
  {
    id: 6,
    color: '#2442AC',
    value: 'Facebook',
    label: (
      <span className="flex items-center gap-2 ">
        <FacebookIcon color="#fff" />
        Facebook
      </span>
    ),
  },
  {
    id: 7,
    color: '#EE3FC8',
    value: 'Twitch',
    label: (
      <span className="flex items-center gap-2 ">
        <TwitchIcon color="#fff" /> Twitch
      </span>
    ),
  },
  {
    id: 8,
    color: '#333',
    value: 'Dev.to',
    label: (
      <span className="flex items-center gap-2 ">
        <DevIcon color="#fff" /> Dev.to
      </span>
    ),
  },
  {
    id: 9,
    color: '#8A1A50',
    value: 'Codewars',
    label: (
      <span className="flex items-center gap-2 ">
        <CodewarsIcon color="#fff" /> Codewars
      </span>
    ),
  },
  {
    id: 10,
    color: '#8A1A50',
    value: 'Codepen',
    label: (
      <span className="flex items-center gap-2 ">
        <CodePenIcon color="#fff" />
        Codepen
      </span>
    ),
  },
  {
    id: 11,
    color: '#302267',
    value: 'FreeCodeCamp',
    label: (
      <span className="flex items-center gap-2 ">
        <FreeCodeIcon color="#fff" />
        FreeCodeCamp
      </span>
    ),
  },
  {
    id: 12,
    color: '#EB4925',
    value: 'Gitlab',
    label: (
      <span className="flex items-center gap-2 ">
        <GitLabIcon color="#fff" />
        Gitlab
      </span>
    ),
  },
  {
    id: 13,
    color: '#0330D1',
    value: 'HashNode',
    label: (
      <span className="flex items-center gap-2 ">
        <HashNodeIcon color="#fff" />
        HashNode
      </span>
    ),
  },
  {
    id: 14,
    color: '#EC7100',
    value: 'Stachoverflow',
    label: (
      <span className="flex items-center gap-2 ">
        <StackIcon color="#fff" />
        Stachoverflow
      </span>
    ),
  },
]
