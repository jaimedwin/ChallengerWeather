CREATE DATABASE ChallengerWeatherDB
USE ChallengerWeatherDB

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[User]
(
	[ID]			[bigint] NOT NULL IDENTITY(1, 1),
	[Username] 	    [nvarchar] (100) UNIQUE NOT NULL,
	[Password]		[nvarchar] (100) NOT NULL,
	[Email]			[varchar] (320) UNIQUE NOT NULL,
	CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED([ID] ASC)WITH (
	    PAD_INDEX = OFF,
	    STATISTICS_NORECOMPUTE = OFF,
	    IGNORE_DUP_KEY = OFF,
	    ALLOW_ROW_LOCKS = ON,
	    ALLOW_PAGE_LOCKS = ON
	) ON [PRIMARY]
) ON [PRIMARY]
GO


CREATE TABLE [dbo].[Weather]
(
	[ID]			[bigint] NOT NULL IDENTITY(1, 1),
	[Precipitation]	[tinyint] NOT NULL,
	[Humidity]		[tinyint] NOT NULL,
	[Wind]			[tinyint] NOT NULL,
	[Date]			[datetime] NOT NULL,
	[CityID]		[int] NOT NULL,
	[Status]		[bit] NOT NULL,
	[UpdateAt]		[datetime] NOT NULL,
	[CreateAt]		[datetime] NOT NULL,
	[DeleteAt]		[datetime] NOT NULL,
	[UserID]	    [bigint] NOT NULL,
	CONSTRAINT [PK_Weather] PRIMARY KEY CLUSTERED([ID] ASC)WITH (
	    PAD_INDEX = OFF,
	    STATISTICS_NORECOMPUTE = OFF,
	    IGNORE_DUP_KEY = OFF,
	    ALLOW_ROW_LOCKS = ON,
	    ALLOW_PAGE_LOCKS = ON
	) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Country]
(
	[ID]			[int] NOT NULL IDENTITY(1, 1),
	[Name]			[nvarchar](50) NOT NULL,
	[CountryCode]	[varchar](5) NOT NULL,
	CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED([ID] ASC)WITH (
	    PAD_INDEX = OFF,
	    STATISTICS_NORECOMPUTE = OFF,
	    IGNORE_DUP_KEY = OFF,
	    ALLOW_ROW_LOCKS = ON,
	    ALLOW_PAGE_LOCKS = ON
	) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[State]
(
	[ID]			[int] NOT NULL IDENTITY(1, 1),
	[Name]			[nvarchar](50) NOT NULL,
	[CountryID]		[int] NOT NULL,
	CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED([ID] ASC)WITH (
	    PAD_INDEX = OFF,
	    STATISTICS_NORECOMPUTE = OFF,
	    IGNORE_DUP_KEY = OFF,
	    ALLOW_ROW_LOCKS = ON,
	    ALLOW_PAGE_LOCKS = ON
	) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[City]
(
	[ID]		[int] NOT NULL IDENTITY(1, 1),
	[Name]		[nvarchar](50) NOT NULL,
	[StateID]	[int] NOT NULL,
	CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED([ID] ASC)WITH (
	    PAD_INDEX = OFF,
	    STATISTICS_NORECOMPUTE = OFF,
	    IGNORE_DUP_KEY = OFF,
	    ALLOW_ROW_LOCKS = ON,
	    ALLOW_PAGE_LOCKS = ON
	) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[State]  WITH CHECK ADD  CONSTRAINT 
[FK_State_Country] FOREIGN KEY([CountryID])
REFERENCES [dbo].[Country] ([ID])
GO

ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT 
[FK_City_State] FOREIGN KEY([StateID])
REFERENCES [dbo].[State] ([ID])
GO

ALTER TABLE [dbo].[Weather]  WITH CHECK ADD  CONSTRAINT 
[FK_Weather_City] FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([ID])
GO

ALTER TABLE [dbo].[Weather]  WITH CHECK ADD  CONSTRAINT 
[FK_Weather_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO

ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK_City_State]
GO

ALTER TABLE [dbo].[State] CHECK CONSTRAINT [FK_State_Country]
GO

ALTER TABLE [dbo].[Weather] CHECK CONSTRAINT [FK_Weather_City]
GO

ALTER TABLE [dbo].[Weather] CHECK CONSTRAINT [FK_Weather_City]
GO

ALTER TABLE [dbo].[Weather] CHECK CONSTRAINT [FK_Weather_User]
GO