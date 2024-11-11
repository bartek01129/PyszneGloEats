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


//    @Value("${token.secretKey}")
    private String SECRET_KEY ="8f12b24407f605ac72b9aabf11362c4ee9d4d762496552148eaac7acca8ebd03dc30691808a4e6c2686e85a09b8d37337b1dcad92b9e673374e5900edf58ea23593f59253a69cb438e424adfd68aaddf7e9488ce33ed497d2b6493497918a09be8fb3f5e6fa0dde51a42a61238c72cb547cb9d3f19e115f64a3f055e6272704636957e5df3ab082bee41add7fbb971f658a714732feee5e4ed2b935dba80c70b4e91cf4fe1f4482fa3c550a39ba1b1c32abba612addea61b80781ae338243d46f192373e5da465fb3c839ba3403beb6e88cab14385f9fee7a236113b97801038eaba2180742a3deb69f3d4c31a07365f270315cc322ea9bf96a764298c826ca6454f47917f1298a025977181de8e30d8349cadb0b11492f6435f246fe279f972407c3555f722234f10583ea6a9ecac17ee4ff43a593d74449e57d5046e09acfe0f51e5b5c1707fdd54c1a2790d10bec24eb95fa2ef4ed86af000d3d44db0da6a02af0ed41e865fe716d23ec15471f849ed8c14c9fcd8bd0d4827784a09cc17bb830a93f50c74bf88541ec04d4cc692e045644af92d4e54e1a3f8eb2d9a489db3e482528e71680a7ee274bd2c79239c03b45346be6de113e77566c05b99bfd5bdcf1dce0a95fd3d260021c4e8a3f898e3085df2bcc82ff" ;

//    @Value("${app.expirationTime}")
    private long EXPIRATION_TIME = 172800000;

    public String generateToken(String subject, String role) {

        return Jwts.builder()
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
