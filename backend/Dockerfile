FROM openjdk:21

WORKDIR /app

# Kopiowanie pliku JAR
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Eksponowanie portu aplikacji
EXPOSE 8080

# Komenda uruchamiająca aplikację
ENTRYPOINT ["java", "-jar", "app.jar"]
