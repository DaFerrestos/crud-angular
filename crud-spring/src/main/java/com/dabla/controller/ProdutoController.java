package com.dabla.controller;

import com.dabla.model.Produto;
import com.dabla.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    

    private final ProdutoRepository produtorepository;  

    public ProdutoController(ProdutoRepository produtorepository) {
        this.produtorepository = produtorepository;
    }


    @GetMapping
    public List<Produto> list() {
        return produtorepository.findAll();
    }

}
