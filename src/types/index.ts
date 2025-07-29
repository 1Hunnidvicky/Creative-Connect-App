export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  skills: string[];
  portfolioLinks: PortfolioLink[];
  location?: string;
  creativeFields: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioLink {
  platform: 'behance' | 'soundcloud' | 'github' | 'dribbble' | 'instagram' | 'other';
  url: string;
  title?: string;
}

export interface Meetup {
  id: string;
  title: string;
  description: string;
  organizerId: string;
  organizer: User;
  location?: string;
  isVirtual: boolean;
  virtualLink?: string;
  date: Date;
  duration: number; // in minutes
  maxAttendees?: number;
  attendees: string[]; // user IDs
  creativeFields: string[];
  purpose: 'networking' | 'collaboration' | 'learning' | 'showcase' | 'other';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  authorId: string;
  author: User;
  category: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  userVotes: { [userId: string]: 'up' | 'down' };
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  authorId: string;
  author: User;
  content: string;
  upvotes: number;
  downvotes: number;
  userVotes: { [userId: string]: 'up' | 'down' };
  createdAt: Date;
  updatedAt: Date;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: 'gig' | 'contest' | 'mentorship' | 'collaboration' | 'job';
  posterId: string;
  poster: User;
  location?: string;
  isRemote: boolean;
  budget?: {
    min: number;
    max: number;
    currency: string;
  };
  deadline?: Date;
  requiredSkills: string[];
  creativeFields: string[];
  applicationLink?: string;
  contactEmail?: string;
  tags: string[];
  applicants: string[]; // user IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  creator: User;
  members: string[]; // user IDs
  isPrivate: boolean;
  category: string;
  tags: string[];
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Profile: { userId: string };
  MeetupDetails: { meetupId: string };
  IdeaDetails: { ideaId: string };
  OpportunityDetails: { opportunityId: string };
  Chat: { userId: string };
  GroupDetails: { groupId: string };
};

export type MainTabParamList = {
  Home: undefined;
  Meetups: undefined;
  Ideas: undefined;
  Opportunities: undefined;
  Profile: undefined;
};