USE [master]
GO
/****** Object:  Database [TrainerStats]    Script Date: 2023-02-11 12:12:45 AM ******/
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
/****** Object:  User [TSAdmin]    Script Date: 2023-02-11 12:12:45 AM ******/
CREATE USER [TSAdmin] FOR LOGIN [TSAdmin] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [TSAdmin]
GO
/****** Object:  Table [dbo].[GameplayMedals]    Script Date: 2023-02-11 12:12:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GameplayMedals](
	[EntryID] [int] NOT NULL,
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
	[Picknicker] [smallint] NOT NULL,
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
	[Wayfarer] [smallint] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainerStats]    Script Date: 2023-02-11 12:12:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainerStats](
	[EntryID] [int] NOT NULL,
	[Caught] [smallint] NOT NULL,
	[Seen] [smallint] NOT NULL,
	[DistanceWalked] [smallint] NOT NULL,
	[PokemonCaught] [int] NOT NULL,
	[PokestopsVisited] [int] NOT NULL,
	[TrainerLevel] [nchar](10) NULL,
	[TotalXP] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeMedals]    Script Date: 2023-02-11 12:12:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeMedals](
	[EntryID] [int] NOT NULL,
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
	[FairyTaleGirl] [smallint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Entries]    Script Date: 2023-02-11 12:12:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Entries](
	[EntryID] [int] IDENTITY(1028,1) NOT NULL,
	[TrainerID] [smallint] NOT NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK_Entries] PRIMARY KEY CLUSTERED 
(
	[EntryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainerProfile]    Script Date: 2023-02-11 12:12:45 AM ******/
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
/****** Object:  View [dbo].[ViewAllTrainerStats]    Script Date: 2023-02-11 12:12:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewAllTrainerStats]
AS
SELECT        dbo.TrainerProfile.TrainerID, dbo.Entries.EntryID AS Expr1, dbo.TrainerStats.Caught, dbo.TrainerStats.Seen, dbo.TrainerStats.DistanceWalked, dbo.TrainerStats.PokemonCaught, dbo.TrainerStats.PokestopsVisited, 
                         dbo.TrainerStats.TrainerLevel, dbo.TrainerStats.TotalXP
FROM            dbo.GameplayMedals INNER JOIN
                         dbo.TrainerStats ON dbo.GameplayMedals.EntryID = dbo.TrainerStats.EntryID INNER JOIN
                         dbo.TypeMedals ON dbo.GameplayMedals.EntryID = dbo.TypeMedals.EntryID INNER JOIN
                         dbo.Entries ON dbo.GameplayMedals.EntryID = dbo.Entries.EntryID INNER JOIN
                         dbo.TrainerProfile ON dbo.TrainerProfile.TrainerID = dbo.Entries.TrainerID
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Trainers]    Script Date: 2023-02-11 12:12:45 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Trainers] ON [dbo].[TrainerProfile]
(
	[TrainerName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "TrainerProfile"
            Begin Extent = 
               Top = 19
               Left = 0
               Bottom = 149
               Right = 170
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Entries"
            Begin Extent = 
               Top = 189
               Left = 202
               Bottom = 302
               Right = 372
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "GameplayMedals"
            Begin Extent = 
               Top = 186
               Left = 578
               Bottom = 316
               Right = 802
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TrainerStats"
            Begin Extent = 
               Top = 54
               Left = 370
               Bottom = 184
               Right = 549
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TypeMedals"
            Begin Extent = 
               Top = 177
               Left = 980
               Bottom = 307
               Right = 1150
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewAllTrainerStats'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'= 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewAllTrainerStats'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewAllTrainerStats'
GO
USE [master]
GO
ALTER DATABASE [TrainerStats] SET  READ_WRITE 
GO
