USE [TrainerStats]
GO
/****** Object:  Table [dbo].[GameplayMedals]    Script Date: 2023-01-25 11:38:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GameplayMedals](
	[EntryID] [int] IDENTITY(1,1) NOT NULL,
	[TrainerID] [smallint] NOT NULL,
	[Date] [date] NOT NULL,
	[Kanto] [smallint] NOT NULL,
	[Collector] [int] NOT NULL,
	[Scientist] [smallint] NOT NULL,
	[Breeder] [smallint] NOT NULL,
	[Sightseer] [smallint] NOT NULL,
	[PikachuFan] [smallint] NOT NULL,
	[Johto] [smallint] NOT NULL,
	[GymLeader] [int] NOT NULL,
	[PokemonRanger] [smallint] NOT NULL,
	[Idol] [smallint] NOT NULL,
	[GreatLeague] [smallint] NOT NULL,
	[Cameraman] [smallint] NOT NULL,
	[Purifier] [smallint] NOT NULL,
	[Triathlete] [smallint] NOT NULL,
	[RisingStar] [smallint] NOT NULL,
	[Picnicker] [smallint] NOT NULL,
	[VivillonCollector] [smallint] NOT NULL,
	[Jogger] [smallint] NOT NULL,
	[Backpacker] [int] NOT NULL,
	[Fisher] [smallint] NOT NULL,
	[BattleGirl] [smallint] NOT NULL,
	[Youngster] [smallint] NOT NULL,
	[Unown] [smallint] NOT NULL,
	[BerryMaster] [smallint] NOT NULL,
	[Hoenn] [smallint] NOT NULL,
	[Gentleman] [smallint] NOT NULL,
	[Sinnoh] [smallint] NOT NULL,
	[UltraLeagueVeteran] [smallint] NOT NULL,
	[MasterLeagueVeteran] [smallint] NOT NULL,
	[Unova] [smallint] NOT NULL,
	[Hero] [smallint] NOT NULL,
	[Kalos] [smallint] NOT NULL,
	[Alola] [smallint] NOT NULL,
	[Successor] [smallint] NOT NULL,
	[RaidExpert] [smallint] NOT NULL,
	[AceTrainer] [smallint] NOT NULL,
	[Champion] [smallint] NOT NULL,
	[BattleLegend] [smallint] NOT NULL,
	[Pilot] [int] NOT NULL,
	[UltraHero] [smallint] NOT NULL,
	[RisingStarDuo] [smallint] NOT NULL,
	[MegaEvolutionGuru] [smallint] NOT NULL,
	[Hisui] [smallint] NOT NULL,
	[BestBuddy] [smallint] NOT NULL,
	[Galar] [smallint] NOT NULL,
	[FriendFinder] [smallint] NOT NULL,
	[TinyPokemonCollector] [smallint] NOT NULL,
	[JumboPokemonCollector] [smallint] NOT NULL,
	[Wayfarer] [smallint] NULL,
 CONSTRAINT [PK_GameplayMedals] PRIMARY KEY CLUSTERED 
(
	[EntryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainerProfile]    Script Date: 2023-01-25 11:38:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainerProfile](
	[TrainerID] [smallint] IDENTITY(1000,1) NOT NULL,
	[TrainerName] [varchar](15) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Firstname] [varchar](15) NOT NULL,
	[Lastname] [varchar](15) NOT NULL,
	[Password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Trainers] PRIMARY KEY CLUSTERED 
(
	[TrainerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainerStats]    Script Date: 2023-01-25 11:38:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainerStats](
	[EntryID] [int] IDENTITY(1,1) NOT NULL,
	[TrainerID] [smallint] NOT NULL,
	[Date] [date] NOT NULL,
	[Caught] [smallint] NOT NULL,
	[Seen] [smallint] NOT NULL,
	[DistanceWalked] [smallint] NOT NULL,
	[PokemonCaught] [int] NOT NULL,
	[PokestopsVisited] [int] NOT NULL,
	[TrainerLevel] [nchar](10) NULL,
	[TotalXP] [int] NOT NULL,
 CONSTRAINT [PK_TrainerStats] PRIMARY KEY CLUSTERED 
(
	[EntryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeMedals]    Script Date: 2023-01-25 11:38:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeMedals](
	[EntryID] [int] IDENTITY(1,1) NOT NULL,
	[TrainerID] [smallint] NOT NULL,
	[Date] [date] NOT NULL,
	[Schoolkid] [smallint] NOT NULL,
	[BlackBelt] [smallint] NOT NULL,
	[BirdKeeper] [smallint] NOT NULL,
	[PunkGirl] [smallint] NOT NULL,
	[RuinManiac] [smallint] NOT NULL,
	[Hiker] [smallint] NOT NULL,
	[BugCatcher] [smallint] NOT NULL,
	[HexManiac] [smallint] NOT NULL,
	[RailStaff] [smallint] NOT NULL,
	[Kindler] [smallint] NOT NULL,
	[Swimmer] [smallint] NOT NULL,
	[Gardener] [smallint] NOT NULL,
	[Rocker] [smallint] NOT NULL,
	[Psychic] [smallint] NOT NULL,
	[Skier] [smallint] NOT NULL,
	[DragonTamer] [smallint] NOT NULL,
	[Delinquent] [smallint] NOT NULL,
	[FairyTaleGirl] [smallint] NOT NULL,
 CONSTRAINT [PK_TypeMedals] PRIMARY KEY CLUSTERED 
(
	[EntryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
