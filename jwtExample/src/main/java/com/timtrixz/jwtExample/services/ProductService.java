package com.timtrixz.jwtExample.services;

import com.timtrixz.jwtExample.models.Product;
import com.timtrixz.jwtExample.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getTopSixProducts() {
        return productRepository.findAll(PageRequest.of(0, 6)).getContent();
    }
}
