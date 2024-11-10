package com.PyszneGloEats.backend.service.authServices.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;

@Component
public class JwtTokenProvider {


    @Value("${app.secret-key}")
    private String SECRET_KEY;

    @Value("${app.expiration-time}")
    private long EXPIRATION_TIME;

    public String generateToken(String subject, String role) {
        var claims = new HashMap<String, Object>();
        claims.put("role", role);

        return Jwts.builder()
                .setClaims(claims)
               .setSubject(subject)
               .setIssuedAt(new Date())
               .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
               .setAudience(role)
               .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
               .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            System.out.println("Invalid token: " + e.getMessage());
            return false;
        }
    }

    public Claims getClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }



}
