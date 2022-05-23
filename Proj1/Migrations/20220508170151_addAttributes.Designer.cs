﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Proj1.with_relation.data;

#nullable disable

namespace Proj1.Migrations
{
    [DbContext(typeof(PjContext))]
    [Migration("20220508170151_addAttributes")]
    partial class addAttributes
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Proj1.with_relation.models.BookingR", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("flightRId")
                        .HasColumnType("int");

                    b.Property<int>("passengerRId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("flightRId");

                    b.HasIndex("passengerRId", "flightRId")
                        .IsUnique();

                    b.ToTable("bookingRs");
                });

            modelBuilder.Entity("Proj1.with_relation.models.FlightR", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ArrivalAirport")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ArrivalDate")
                        .HasColumnType("Date");

                    b.Property<TimeSpan>("ArrivalTime")
                        .HasColumnType("time");

                    b.Property<string>("DepartureAirport")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DepartureDate")
                        .HasColumnType("Date");

                    b.Property<TimeSpan>("DepartureTime")
                        .HasColumnType("time");

                    b.Property<int>("PassengerLimit")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("flightRs");
                });

            modelBuilder.Entity("Proj1.with_relation.models.PassengerR", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Job")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("passengerRs");
                });

            modelBuilder.Entity("Proj1.with_relation.models.BookingR", b =>
                {
                    b.HasOne("Proj1.with_relation.models.FlightR", "flightR")
                        .WithMany("bookings")
                        .HasForeignKey("flightRId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Proj1.with_relation.models.PassengerR", "passengerR")
                        .WithMany("bookings")
                        .HasForeignKey("passengerRId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("flightR");

                    b.Navigation("passengerR");
                });

            modelBuilder.Entity("Proj1.with_relation.models.FlightR", b =>
                {
                    b.Navigation("bookings");
                });

            modelBuilder.Entity("Proj1.with_relation.models.PassengerR", b =>
                {
                    b.Navigation("bookings");
                });
#pragma warning restore 612, 618
        }
    }
}