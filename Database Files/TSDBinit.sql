USE [master]
GO
/****** Object:  Database [TrainerStats]    Script Date: 2023-01-07 1:31:05 PM ******/
CREATE DATABASE [TrainerStats]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TrainerStats', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\TrainerStats.mdf' , SIZE = 102400KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TrainerStats_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\TrainerStats_log.ldf' , SIZE = 102400KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [TrainerStats] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TrainerStats].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TrainerStats] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TrainerStats] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TrainerStats] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TrainerStats] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TrainerStats] SET ARITHABORT OFF 
GO
ALTER DATABASE [TrainerStats] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TrainerStats] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TrainerStats] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TrainerStats] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TrainerStats] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TrainerStats] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TrainerStats] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TrainerStats] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TrainerStats] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TrainerStats] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TrainerStats] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TrainerStats] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TrainerStats] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TrainerStats] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TrainerStats] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TrainerStats] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TrainerStats] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TrainerStats] SET RECOVERY FULL 
GO
ALTER DATABASE [TrainerStats] SET  MULTI_USER 
GO
ALTER DATABASE [TrainerStats] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TrainerStats] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TrainerStats] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TrainerStats] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TrainerStats] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TrainerStats] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'TrainerStats', N'ON'
GO
ALTER DATABASE [TrainerStats] SET QUERY_STORE = ON
GO
ALTER DATABASE [TrainerStats] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [TrainerStats]
GO
/****** Object:  Table [dbo].[GameplayMedals]    Script Date: 2023-01-07 1:31:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GameplayMedals](
	[EntryID] [int] NOT NULL,
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
/****** Object:  Table [dbo].[Trainers]    Script Date: 2023-01-07 1:31:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trainers](
	[TrainerName] [varchar](15) NOT NULL,
	[TrainerID] [smallint] NOT NULL,
	[StartDate] [date] NOT NULL,
	[Email] [nchar](10) NOT NULL,
	[Password] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Trainers] PRIMARY KEY CLUSTERED 
(
	[TrainerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainerStats]    Script Date: 2023-01-07 1:31:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainerStats](
	[EntryID] [int] NOT NULL,
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
/****** Object:  Table [dbo].[TypeMedals]    Script Date: 2023-01-07 1:31:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeMedals](
	[EntryID] [int] NOT NULL,
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
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Trainers]    Script Date: 2023-01-07 1:31:05 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Trainers] ON [dbo].[Trainers]
(
	[TrainerName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_TrainerStats]    Script Date: 2023-01-07 1:31:05 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_TrainerStats] ON [dbo].[TrainerStats]
(
	[TrainerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[GameplayMedals]  WITH CHECK ADD  CONSTRAINT [FK_GameplayMedals_TrainerStats] FOREIGN KEY([EntryID])
REFERENCES [dbo].[TrainerStats] ([EntryID])
GO
ALTER TABLE [dbo].[GameplayMedals] CHECK CONSTRAINT [FK_GameplayMedals_TrainerStats]
GO
ALTER TABLE [dbo].[GameplayMedals]  WITH CHECK ADD  CONSTRAINT [FK_GameplayMedals_TrainerStats1] FOREIGN KEY([TrainerID])
REFERENCES [dbo].[TrainerStats] ([TrainerID])
GO
ALTER TABLE [dbo].[GameplayMedals] CHECK CONSTRAINT [FK_GameplayMedals_TrainerStats1]
GO
ALTER TABLE [dbo].[TrainerStats]  WITH CHECK ADD  CONSTRAINT [FK_TrainerStats_Trainers] FOREIGN KEY([TrainerID])
REFERENCES [dbo].[Trainers] ([TrainerID])
GO
ALTER TABLE [dbo].[TrainerStats] CHECK CONSTRAINT [FK_TrainerStats_Trainers]
GO
ALTER TABLE [dbo].[TypeMedals]  WITH CHECK ADD  CONSTRAINT [FK_TypeMedals_TrainerStats] FOREIGN KEY([EntryID])
REFERENCES [dbo].[TrainerStats] ([EntryID])
GO
ALTER TABLE [dbo].[TypeMedals] CHECK CONSTRAINT [FK_TypeMedals_TrainerStats]
GO
ALTER TABLE [dbo].[TypeMedals]  WITH CHECK ADD  CONSTRAINT [FK_TypeMedals_TrainerStats1] FOREIGN KEY([TrainerID])
REFERENCES [dbo].[TrainerStats] ([TrainerID])
GO
ALTER TABLE [dbo].[TypeMedals] CHECK CONSTRAINT [FK_TypeMedals_TrainerStats1]
GO
USE [master]
GO
ALTER DATABASE [TrainerStats] SET  READ_WRITE 
GO
