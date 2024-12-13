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
        username: 'rigorously-model-budgerigar-72985',
        joinDate: 'September 15, 2019',
        imgUrl: 'https://storage.googleapis.com/codeium-users/UE15qmxtT7Zt9hxIlmrObjPYDuu2/profile.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=codeium-api-sa%40exafunction.iam.gserviceaccount.com%2F20241213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241213T130157Z&X-Goog-Expires=28799&X-Goog-Signature=09bed82b7ebde41ebc233539f42dea6a47a96c61f87325aec9050ee0a283b72dc99b86af663ec56b99aca4a308a82249d843d9ae382059009f680627c6e21663e89871849ec9fc13a9d22679e91a8685b427afb0f129e6c75062deaa014bc9fcc3255f95ff074a6141074bf125345de18ab5a8444207ce3498a99f71a4fb5bfb38654e45359d4aeeda29d2aefa440af54e3231d74e217fb50f9aec72cfbf066a4a45816ca3a558c3b5bb337a6f88c5c96a709fc3be0a2726c819ca907ca42118bce8a8b3ae7f83854fdb2cfcd0ec875f613ac946742dbe116be01259f6f328dfc88896fdc500d2c67b455466009dc1a051db2521b434db35335cca9319d8056f&X-Goog-SignedHeaders=host',
        publicProfile: 'https://codeium.com/profile/rigorously-model-budgerigar-72985',
        status: {
            type: 'Online' as UserStatus,
            lastActive: '2 minutes ago'
        },
        bio: ":D",
        isActive: true
    },
    stats: {
        // bump these numbers when we add more features
        totalCompletions: 1547,
        streak: {
            current: 42, // pretty good streak going!
            record: 85,  // need to beat this someday
            lastUpdated: '2024-12-13T13:21:09Z'
        },
        totalLanguages: 6,
        contributions: {
            total: 3642,
            lastYear: 1256,
            thisMonth: 89 // not bad for December
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
            achievedAt: '2023-11-15T10:30:00Z' // first achievement! 🎉
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
            achievedAt: null // almost there!
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
            id: 'wizard-4', // the final boss of achievements
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
