#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["iris frontend/iris frontend.csproj", "iris frontend/"]
RUN dotnet restore "iris frontend/iris frontend.csproj"
COPY . .
WORKDIR "/src/iris frontend"
RUN dotnet build "iris frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "iris frontend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "iris frontend.dll"]