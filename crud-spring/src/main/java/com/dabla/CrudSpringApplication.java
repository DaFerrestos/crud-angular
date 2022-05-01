package com.dabla;

import com.dabla.model.Produto;
import com.dabla.repository.ProdutoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProdutoRepository produtorepository) {
		return args -> {
			produtorepository.deleteAll();

			Produto p = new Produto();
			p.setNome("Camiseta Infantil Personalizada");
			p.setCategoria("vestuário");

			produtorepository.save(p);
		};
	}

}
