// TODO: Add more achievement types later
// Maybe add some rare ones for special events? 🤔
export type UserStatus = 'Online' | 'Idle' | 'Offline' | 'DoNotDisturb';

// Basic user info structure
export interface User {
    name: string;
    username: string;
    joinDate: string;
    imgUrl: string;
    publicProfile: string;
    status: {
        type: UserStatus;
        lastActive: string;
    };
    bio: string;
    isActive: boolean;
}

// Stats tracking - might need to add more stuff here later
export interface Stats {
    totalCompletions: number;
    streak: {
        current: number;
        record: number;
        lastUpdated: string;
    };
    totalLanguages: number;
    contributions: {
        total: number;
        lastYear: number;
        thisMonth: number;
    };
}

// Achievement structure - add more types later
export interface Achievement {
    id: string;
    title: string;
    level: string;
    progress: number;
    maxProgress: number;
    isLocked: boolean;
    icon: string;
    color: string;
    description: string;
    achievedAt: string | null;
}

// Main config - I'll clean this up once we finalize the design
export interface ProfileConfig {
    user: User;
    stats: Stats;
    achievements: Achievement[];
    activityData: {
        contributions: number[];
    };
}

export const profileConfig: ProfileConfig = {
    user: {
        name: 'WA Dev',
        username: 'wa0101',
        joinDate: 'September 15, 2019',
        imgUrl: 'https://avatars.githubusercontent.com/u/138697155?v=4',
        publicProfile: 'https://github.com/wa0101',
        status: {
            type: 'Idle' as UserStatus,
            lastActive: '2 minutes ago'
        },
        bio: ":D",
        isActive: true
    },
    stats: {
        totalCompletions: 1547,
        streak: {
            current: 42, 
            record: 85, 
            lastUpdated: '2024-12-13T13:21:09Z'
        },
        totalLanguages: 6,
        contributions: {
            total: 3642,
            lastYear: 1256,
            thisMonth: 89 
        }
    },
    activityData: {
        // Generate contribution data - trying to make it look natural
        contributions: (() => {
            const data = new Array(371).fill(0);
            // Fill in activity - more recent = more active
            for (let i = 0; i < data.length; i++) {
                const monthIndex = Math.floor(i / 30);
                if (monthIndex >= 6) { // been pretty active lately
                    data[i] = Math.floor(Math.random() * 4) + 1;
                } else if (monthIndex >= 3) { // moderate activity in spring
                    data[i] = Math.floor(Math.random() * 3);
                } else { // was just getting started
                    data[i] = Math.floor(Math.random() * 2);
                }
            }
            return data;
        })()
    },
    achievements: [
        {
            id: 'wizard-1',
            title: 'Autocomplete Wizard I',
            level: '10/10',
            progress: 10,
            maxProgress: 10,
            isLocked: false,
            icon: '< >', // maybe change this to something cooler?
            color: 'bg-[#CCD1D5]',
            description: 'Complete 10 autocomplete suggestions',
            achievedAt: '2023-11-15T10:30:00Z'
        },
        {
            id: 'wizard-2',
            title: 'Autocomplete Wizard II',
            level: '15/20',
            progress: 15,
            maxProgress: 20,
            isLocked: false,
            icon: '{ }',
            color: 'bg-[#0969DA]',
            description: 'Complete 20 advanced autocomplete suggestions',
            achievedAt: null
        },
        {
            id: 'wizard-3',
            title: 'Autocomplete Wizard III',
            level: '-/30',
            progress: 0,
            maxProgress: 30,
            isLocked: true,
            icon: '[ ]',
            color: 'bg-[#8250DF]',
            description: 'Master complex autocomplete patterns',
            achievedAt: null
        },
        {
            id: 'wizard-4',
            title: 'Autocomplete Wizard IV',
            level: '-/40',
            progress: 0,
            maxProgress: 40,
            isLocked: true,
            icon: '/ \\',
            color: 'bg-[#CF222E]',
            description: 'Become a legendary autocomplete wizard',
            achievedAt: null
        }
    ]
};
